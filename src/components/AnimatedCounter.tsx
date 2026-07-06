"use client";
import React from 'react';
import CountUp from 'react-countup';

export default function AnimatedCounter({end,label}:{end:number,label:string}){
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary"><CountUp end={end} duration={2.5} /></div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </div>
  )
}
