import TileGrid from './tilegrid/TileGrid';

export function createOrUpdate(z: number, x: number, y: number, opt_tileCoord?: TileCoord): TileCoord;
export function fromKey(key: string): TileCoord;
export function getKey(tileCoord: TileCoord): string;
export function getKeyZXY(z: number, x: number, y: number): string;
export function hash(tileCoord: TileCoord): number;
export function quadKey(tileCoord: TileCoord): string;
export function withinExtentAndZ(tileCoord: TileCoord, tileGrid: TileGrid): boolean;
export type TileCoord = number[];
