const cors_anywhere =  'https://api.codetabs.com/v1/proxy?quest='
const base_url = 'https://api.musixmatch.com/ws/1.1/';
const chart_track_get_first = 'chart.tracks.get?';
const api_key = 'a5db16c6a976914dba8dc86c77e2073d';
const name_api_key = 'apikey='
const ampers = '&';
const chart_track_get_second = '&chart_name=top&page=1&page_size=10&f_has_lyrics=1'
const track_search = '&page_size=100&page=10&s_track_rating=desc'
const track_search_params = 'track.search?q_artist='
const track_lyrics_get = 'track.lyric.get?commontrack_id'
const track_get = 'track.get?commontrack_id'

export const chartTrackGet = () => `${cors_anywhere}${encodeURIComponent(`${base_url}${chart_track_get_first}${name_api_key}${api_key}${chart_track_get_second}`)}`
export const trackSearch = q_track => `${cors_anywhere}${encodeURIComponent(`${base_url}${track_search_params}${q_track}${ampers}${name_api_key}${api_key}${track_search}`)}`
export const trackLyricsGet = commontrack_id => `${cors_anywhere}${encodeURIComponent(`${base_url}${name_api_key}${api_key}${track_lyrics_get}${commontrack_id}`)}`
export const trackGet = commontrack_id => `${cors_anywhere}${encodeURIComponent(`${base_url}${name_api_key}${api_key}${track_get}${commontrack_id}`)}`


