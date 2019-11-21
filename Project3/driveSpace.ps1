$Drives = Get-PSDrive -PSProvider 'FileSystem'

foreach($Drive in $drives) {

    Get-ChildItem -Path $Drive.Root -Recurse -File -ErrorAction SilentlyContinue -Force |
        Sort-Object Length -Descending |
        Select-Object -First 5

    

    $driveName = Get-PSDrive $Drive 
    $used = $driveName.Used
    $free = $driveName.Free

    "($Drive\) drive total size in GB: " 
    ($used / 1GB)
    "($Drive\) drive free space in GB: " 
    ($free / 1GB)
    ""
    ""
}