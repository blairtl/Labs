$Drives = Get-PSDrive -PSProvider 'FileSystem'

foreach($Drive in $drives) {

    Get-ChildItem -Path $Drive.Root -Recurse -File -ErrorAction SilentlyContinue -Force |
        Sort-Object Length -Descending |
        Select-Object -First 5

   Get-WmiObject Win32_LogicalDisk -ComputerName $env:COMPUTERNAME -Filter "DeviceID='$Drive'" | Select-Object Size, FreeSpace

    "($Drive\) drive total size in GB: "
    [Math]::Round($Drive.Size / 1GB)
    "($Drive\) drive free space in GB: "
    [Math]::Round($Drive.FreeSpace / 1GB)
    ""
    ""
}