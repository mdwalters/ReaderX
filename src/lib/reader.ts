import { extractFromXml, extractFromJson } from "@extractus/feed-extractor";
import fetch from "node-fetch";

export async function extract(url: string): Object {
    let extracted_feed = extractFromXml(await fetch(url).then(res => res.text()));    
}
