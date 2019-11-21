What it does: Reads your system drives for the total storage space and free storage space,
and outputs the variables rounded to the nearst full GB. It will then output the 5 largest files it
can find on each drive while not outputing files it is denied access to. It will also show you the filepath for each file. Files found in the same folder will be consolidated rather than have entire entries to themselves.

*NOTE* The process of finding the files can take some time, and may not appear immediately.

What output should look like:

*NOTE* This output will repeat for each drive the script finds.

    Directory: C:\


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a-hs-       11/21/2019  11:21 AM     6849695744 hiberfil.sys
-a-hs-       11/15/2019   9:04 AM     2550136832 pagefile.sys


    Directory: C:\Windows


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----       10/13/2019   5:34 PM     1173719633 MEMORY.DMP


    Directory: C:\Windows\Installer


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----       11/18/2019  11:46 AM      371888128 1007762a.msi


    Directory: C:\Users\tyler\AppData\Local\Temp


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----       11/18/2019  11:46 AM      371888128 22.74_release.msi
(C\) drive total size in GB: 
50.0253486633301
(C\) drive free space in GB:
880.886756896973
How to run script:

1: Download file.
2: Open File Explorer, and navigate to the downloaded file.
3: Right-click the file, and select "Run with Powershell"