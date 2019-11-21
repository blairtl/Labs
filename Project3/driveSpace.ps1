$disk = Get-WmiObject Win32_LogicalDisk -ComputerName $env:COMPUTERNAME -Filter "DeviceID='C:'" | Select-Object Size, FreeSpace
"PRIMARY DRIVE"
"(C:\) drive total size in GB: "
[Math]::Round($disk.Size / 1GB)
"(C:\) drive free space in GB: "
[Math]::Round($disk.FreeSpace / 1GB)
""
""

$disk = Get-WmiObject Win32_LogicalDisk -ComputerName $env:COMPUTERNAME -Filter "DeviceID='D:'" | Select-Object Size, FreeSpace
"SECONDARY DRIVE"
"(D:\) drive total size in GB: "
[Math]::Round($disk.Size / 1GB)
"(D:\) drive free space in GB: "
[Math]::Round($disk.FreeSpace / 1GB)
""
""

$disk = Get-WmiObject Win32_LogicalDisk -ComputerName $env:COMPUTERNAME -Filter "DeviceID='E:'" | Select-Object Size, FreeSpace
"REMOVABLE DRIVE/FLASH DRIVE"
"(E:\) drive total size in GB: "
[Math]::Round($disk.Size / 1GB)
"(E:\) drive free space in GB: "
[Math]::Round($disk.FreeSpace / 1GB)
""
""

"Ten largest files found:"
Get-ChildItem c:\ -r -ErrorAction SilentlyContinue | Where-Object {$_.permission -match "read"}| Sort-Object -descending -property length | Select-Object -first 10 name, Length | Out-GridView

""
""
Pause