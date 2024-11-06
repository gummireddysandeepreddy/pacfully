"use client"

import { useRive } from '@rive-app/react-canvas';

export default function SimpleLoading() {
  const { rive, RiveComponent } = useRive({
    src: './moringa.riv',
    stateMachines: "State Machine 1",
    // autoplay: true,
    artboard: "main",
  });

  return (
    <RiveComponent/>
  );
}