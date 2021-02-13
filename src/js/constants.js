/** 
  Regex Pattern for different types of youtube links
  https://stackoverflow.com/questions/5830387/how-do-i-find-all-youtube-video-ids-in-a-string-using-a-regex/5831191#5831191
    (?:http|https?:\/\/)?     # Optional scheme. Either http or https.
    (?:[0-9A-Z-]+\.)?         # Optional subdomain.
    (?:                       # Group host alternatives.
      youtu\.be/              # Either youtu.be,
    | youtube                 # or youtube.com or
      (?:-nocookie)?          # youtube-nocookie.com
      \.com                   # followed by
      \S*?                    # Allow anything up to VIDEO_ID,
      [^\w\s-]                # but char before ID is non-ID char.
    )                         # End host alternatives.
    ([\w-]{11})               # $1: VIDEO_ID is exactly 11 chars.
    (?=[^\w-]|$)              # Assert next char is non-ID or EOS.
    (?!                       # Assert URL is not pre-linked.
      [?=&+%\w.-]*            # Allow URL (query) remainder.
      (?:                     # Group pre-linked alternatives.
        [\'"][^<>]*>          # Either inside a start tag,
      | </a>                  # or inside <a> element text contents.
      )                       # End recognized pre-linked alts.
    )                         # End negative lookahead assertion.
    [?=&+%\w.-]*              # Consume any URL (query) remainder.
    ig                        # i(case-insensitive), g(return all instances of match)
*/


export const PLAYLIST = 'playlist';
export const URLPATTERN = /^(?:http|https?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;