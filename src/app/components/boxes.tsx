'use client';

import Spline from '@splinetool/react-spline';
import { Suspense, useEffect, useRef } from 'react';

export default function Boxes() {
  let initialZoom: number = 0;
  const cube = useRef<any>();

  function getScaleValue() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      return 0.5;
    } else if (screenWidth > 700) {
      return 0.38;
    } else if (screenWidth > 500) {
      return 0.32;
    }
    return 0.25;
  }

  function onLoad(spline: { setZoom: (arg0: number) => void; findObjectByName: (arg0: string) => any }) {
    const scaleValue = getScaleValue();
    initialZoom = scaleValue;
    spline.setZoom(scaleValue);
    const obj = spline.findObjectByName('Cube');
    cube.current = obj;
  }

  function setSplineScale(scale: number) {
    if (cube.current === undefined) return;
    const newScale = cube.current.scale;
    newScale.x = scale;
    newScale.y = scale;
    newScale.z = scale;
    cube.current.scale = newScale;
  }

  useEffect(() => {
    function scaleSpline() {
      if (cube.current?.scale) {
        const scaleValue = getScaleValue();
        setSplineScale(scaleValue / initialZoom);
      }
    }
    window.addEventListener('resize', scaleSpline);
    return () => window.removeEventListener('resize', scaleSpline);
  }, [initialZoom]);

  return (
    <div className="hidden h-[350px] w-[500px] rounded-xl lg:block 2xl:h-[450px] 2xl:w-[800px]">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          onLoad={onLoad}
          className="rounded-xl"
          scene="https://prod.spline.design/coIGKTmEjqMmuZHW/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}
