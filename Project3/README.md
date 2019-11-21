What it does: Reads your system C: drive for the total storage space and free storage space,
and outputs the variables rounded to the nearst full GB. It will then output the 10 largest files it
can find while not outputing files it is denied access to. The files aree listed in a grid view.

*NOTE* The process of finding the files can take some time, and may not appear immediately.

What output should look like:

PRIMARY DRIVE
(C:\) drive total size in GB:
####
(C:\) drive free space in GB:
####


SECONDARY DRIVE
(D:\) drive total size in GB:
####
(D:\) drive free space in GB:
####


REMOVABLE DRIVE/FLASH DRIVE
(E:\) drive total size in GB:
####
(E:\) drive free space in GB:
####


Ten largest files found:
##
##
##
##
##
##
##
##
##
##
##

Press ENTER to continue....

How to run script:

1: Download file.
2: Open File Explorer, and navigate to the downloaded file.
3: Right-click the file, and select "Run with Powershell"