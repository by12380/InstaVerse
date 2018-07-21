import { Verse } from "./verse";

export interface VerseGroup {
    inputString: string,
    detected: string,
    verses: Verse[],
    message: string,
}
