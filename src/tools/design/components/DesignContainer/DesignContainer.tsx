/**
    Copyright 2021 Quaffles    
 
    This file is part of Maurya Editor.
    Maurya Editor is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 2 of the License, or
    (at your option) any later version.
    Maurya Editor is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
 */
import React, { useRef } from "react";
import { Canvas } from "../Canvas/Canvas";
import { ELementPanel } from "../ElementPanel/ElementPanel";
import { useManageCursor } from "./useManageCursor";
import "./DesignContainer.css";
import { useShowSampleElement } from "./useShowSampleElement";
import { PropertyPanel } from "../PropertyPanel/PropertyPanel";

export const DesignContainer: React.FC = (props) => {
  const subContainer = useRef<HTMLDivElement>(null);
  const cursor = useManageCursor(subContainer, "grabbing");
  const SampleElement = useShowSampleElement(subContainer);
  return (
    <div className={"container"}>
      <div className={"sub-container"} ref={subContainer} style={{ cursor }}>
        <div className={"panel"}>
          <ELementPanel />
        </div>
        <div className={"canvas"}>
          <Canvas />
        </div>
        {SampleElement &&
        SampleElement.element &&
        SampleElement.left &&
        SampleElement.top ? (
          <div
            className={"sample-element"}
            style={{ top: SampleElement.top, left: SampleElement.left }}
          >
            <SampleElement.element.ondragComp
              {...SampleElement.element.ondragProps}
            />
          </div>
        ) : null}
      </div>
      <div style={{ width: "14em", overflow: "hidden" }}>
        <PropertyPanel />
      </div>
    </div>
  );
};
