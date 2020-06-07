start "AniTestserver" python -m http.server
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "http://localhost:8000/index.html"
pause
taskkill /fi "WindowTitle eq AniTestserver"
exit