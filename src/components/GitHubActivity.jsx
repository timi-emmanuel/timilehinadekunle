import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit,
  GitBranch,
  Flame,
  Trophy,
  CalendarCheck,
  ArrowSquareOut,
  ClockAfternoon,
} from "@phosphor-icons/react";
import {
  GITHUB_USERNAME,
  initialContributionsData,
  calculateActivityMetrics,
  buildWeeklyGrid,
} from "../data/githubActivityFallback";

const levelColors = {
  0: "bg-[#131914] border-[#1D261F]",
  1: "bg-[#183B25] border-[#225535]",
  2: "bg-[#23683D] border-[#318E54]",
  3: "bg-[#3EB868] border-[#5AE687] shadow-[0_0_5px_rgba(74,222,128,0.35)]",
  4: "bg-[#86EFAC] border-[#BBF7D0] shadow-[0_0_8px_rgba(134,239,172,0.7)]",
};

const weekdayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

const GitHubActivity = () => {
  const [data, setData] = useState(initialContributionsData);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [isLiveFetched, setIsLiveFetched] = useState(false);

  // Attempt live fetch on mount with instantaneous fallback to bundled data
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function fetchLiveActivity() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
          { signal: controller.signal }
        );
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json?.contributions?.length) {
            setData(json);
            setIsLiveFetched(true);
          }
        }
      } catch (err) {
        // Fallback already pre-loaded into state
      }
    }

    fetchLiveActivity();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const metrics = useMemo(
    () => calculateActivityMetrics(data?.contributions || []),
    [data]
  );

  const { weeks, monthLabels } = useMemo(
    () => buildWeeklyGrid(data?.contributions || []),
    [data]
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="pane"
      id="activity"
    >
      {/* Pane Header */}
      <div className="pane-label">
        <div className="flex items-center gap-2">
          <GitBranch size={13} className="text-accent" />
          <span>05 — github_activity.log</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
          <span className={`w-1.5 h-1.5 rounded-full ${isLiveFetched ? "bg-live shadow-[0_0_6px_#4ADE80] animate-pulse" : "bg-accent"}`} />
          <span>{isLiveFetched ? "live telemetry active" : "cached snapshot [363+ commits]"}</span>
        </div>
      </div>

      {/* Terminal Command & Telemetry Ribbon */}
      <div className="px-4 py-3 sm:px-6 sm:py-3.5 border-b border-border bg-panel-2/30 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-2">
        <div className="flex items-center gap-2 text-text text-[11px] truncate">
          <span className="text-accent">$</span>
          <span>git log --author="{GITHUB_USERNAME}" --since="1.year.ago" --graph</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
          <span className="text-muted flex items-center gap-1">
            <ClockAfternoon size={12} className="text-accent" />
            <span>Branch: main</span>
          </span>
          <span className="text-muted-2">•</span>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline flex items-center gap-1"
          >
            <span>@{GITHUB_USERNAME}</span>
            <ArrowSquareOut size={12} />
          </a>
        </div>
      </div>

      {/* Metric Counters Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border border-b border-border font-mono text-left bg-[#0C100D]/60">
        <div className="p-3.5 sm:p-4 space-y-1">
          <div className="text-[10px] text-muted-2 uppercase tracking-wider flex items-center gap-1.5">
            <CalendarCheck size={12} className="text-live" />
            <span>Yearly Volume</span>
          </div>
          <div className="text-base sm:text-lg font-semibold text-text">
            {metrics.total} <span className="text-xs font-normal text-muted">commits</span>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 space-y-1">
          <div className="text-[10px] text-muted-2 uppercase tracking-wider flex items-center gap-1.5">
            <Flame size={12} className="text-accent" />
            <span>Current Streak</span>
          </div>
          <div className="text-base sm:text-lg font-semibold text-text">
            {metrics.currentStreak} <span className="text-xs font-normal text-muted">days</span>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 space-y-1">
          <div className="text-[10px] text-muted-2 uppercase tracking-wider flex items-center gap-1.5">
            <Trophy size={12} className="text-[#38BDF8]" />
            <span>Longest Streak</span>
          </div>
          <div className="text-base sm:text-lg font-semibold text-text">
            {metrics.longestStreak} <span className="text-xs font-normal text-muted">days</span>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 space-y-1">
          <div className="text-[10px] text-muted-2 uppercase tracking-wider flex items-center gap-1.5">
            <GitCommit size={12} className="text-accent" />
            <span>Peak Velocity</span>
          </div>
          <div className="text-base sm:text-lg font-semibold text-text">
            {metrics.peakDayCount} <span className="text-xs font-normal text-muted">in 1 day</span>
          </div>
        </div>
      </div>

      {/* Heatmap Container with Horizontal Scroll for Mobile */}
      <div className="p-4 sm:p-6 lg:p-7 space-y-4">
        {/* Dynamic Tooltip Bar */}
        <div className="h-6 font-mono text-[11px] flex items-center justify-between text-left text-muted">
          <AnimatePresence mode="wait">
            {hoveredDay ? (
              <motion.div
                key={hoveredDay.date}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="flex items-center gap-2 text-text font-medium"
              >
                <span className="text-live">●</span>
                <span>
                  <strong className="text-live">{hoveredDay.count}</strong> contribution{hoveredDay.count === 1 ? "" : "s"} on{" "}
                  <span className="text-muted">{hoveredDay.date}</span>
                </span>
              </motion.div>
            ) : (
              <span className="text-muted-2 text-[10.5px]">
                Hover over squares to inspect daily commit density
              </span>
            )}
          </AnimatePresence>

          <span className="hidden sm:inline font-mono text-[10.5px] text-muted-2">
            52 weeks telemetry window
          </span>
        </div>

        {/* Scrollable Heatmap Grid */}
        <div className="overflow-x-auto pb-2 -mx-2 px-2 terminal-scrollbar-x">
          <div className="inline-flex flex-col min-w-[700px] select-none">
            {/* Month Labels Axis */}
            <div className="flex text-[9.5px] font-mono text-muted-2 mb-1 pl-6">
              {weeks.map((_, weekIdx) => {
                const label = monthLabels.find((m) => m.weekIndex === weekIdx);
                return (
                  <div key={weekIdx} className="w-[12px] mr-[3px] text-left">
                    {label ? label.name : ""}
                  </div>
                );
              })}
            </div>

            {/* Matrix with Day Labels */}
            <div className="flex">
              {/* Weekday labels column */}
              <div className="flex flex-col justify-between text-[9px] font-mono text-muted-2 pr-2 h-[98px]">
                {weekdayLabels.map((day, i) => (
                  <span key={i} className="h-[12px] leading-[12px]">
                    {day}
                  </span>
                ))}
              </div>

              {/* 53 Weeks Grid */}
              <div className="flex gap-[3px]">
                {weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIdx) => {
                      if (!day) {
                        return (
                          <div
                            key={dayIdx}
                            className="w-[11px] h-[11px] rounded-[1.5px] opacity-0"
                          />
                        );
                      }

                      const level = Math.min(day.level ?? (day.count > 0 ? 1 : 0), 4);
                      const colorClass = levelColors[level];

                      return (
                        <motion.div
                          key={day.date}
                          whileHover={{ scale: 1.35, zIndex: 20 }}
                          transition={{ duration: 0.1 }}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-[11px] h-[11px] rounded-[1.5px] border cursor-pointer transition-colors duration-150 ${colorClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap Legend & Footer Info */}
        <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] text-muted-2">
          <div className="flex items-center gap-2">
            <span>Activity Legend:</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span
                  key={lvl}
                  className={`w-[10px] h-[10px] rounded-[1.5px] border ${levelColors[lvl]}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors flex items-center gap-1.5"
          >
            <span>inspect full commit history on github</span>
            <ArrowSquareOut size={12} />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default GitHubActivity;
