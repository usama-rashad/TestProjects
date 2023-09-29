import "./App.scss";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IRawData } from "./data";

// Hooks
import { useAppDispatch } from "./store";
import { fetchScrollSegmentThunk } from "./reducers/fetchScrollData";
import { useFetchScroll } from "./hooks/useFetchScroll";

// Components
import DataBlock from "./components/DataBlock/DataBlock";
import InfoBar from "./components/InfoBar/InfoBar";

function App() {
  const dispatch = useAppDispatch();
  const { busy, isEnd, segmentData, segmentStart, segmentEnd, segmentLength } = useFetchScroll();
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [fetch, setFetch] = useState<boolean>(true);
  useEffect(() => {
    // Get initial set of data.
    dispatch(fetchScrollSegmentThunk({ segmentLength: 80 }));
  }, []);

  useEffect(() => {
    if (progressPct > 60 && !busy && !isEnd) {
      setFetch(true);
    }
    if (fetch) {
      dispatch(fetchScrollSegmentThunk({ segmentLength: 80 }));
      setFetch(false);
    }
  }, [progressPct]);

  // Determine content size
  const updateValues = () => {
    setScrollTop(document.documentElement.scrollTop);
    setScrollHeight(document.documentElement.scrollHeight);
    setClientHeight(document.documentElement.clientHeight);
    let progressPct = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100.0);
    setProgressPct(progressPct);
  };

  const onScroll = () => {
    updateValues();
  };

  React.useLayoutEffect(() => {
    document.addEventListener("scroll", onScroll);
    // Initial load
    updateValues();
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className="mainApp">
      <InfoBar />
      <div className="content">
        {segmentData?.map((block, index) => {
          return <DataBlock key={index} data={block} index={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
