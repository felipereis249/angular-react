// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Omit } from '@angular-react/core';

/**
 * Omit a a set of properties from an object.
 *
 * Does **not** modify the original object.
 * @param obj the object
 * @param keys the keys
 * @returns A new object with all properties apart from the `keys` from `obj`
 */
export function omit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  return Object.keys(obj)
    .filter(key => !keys.includes(key as K))
    .reduce<Omit<T, K>>((acc, key) => Object.assign(acc, { [key]: obj[key] }), {} as any);
}

export default omit;
