"use client";
import React from 'react';
import useLenis from '../hooks/useLenis';

export default function ClientProviders({ children }: { children: React.ReactNode }){
  useLenis();
  return <>{children}</>;
}
