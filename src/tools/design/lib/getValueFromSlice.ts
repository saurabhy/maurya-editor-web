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
    along with Quaffles.  If not, see <https://www.gnu.org/licenses/>.
 */

import { DesignRuntime } from "../runtime/DesignRuntime/DesignRuntime";

/**
 * Get value from slice if it exists otherwise throw error
 * @param ID ID of the element
 * @param slice
 */
export const getValueFromSlice = (ID: string, slice: (string | number)[]) => {
  try {
    let curr: any = DesignRuntime.getState()[ID].state;
    for (let i = 0; i < slice.length; i++) {
      curr = curr[slice[i]];
    }
    return curr;
  } catch (err) {
    throw err;
  }
};
