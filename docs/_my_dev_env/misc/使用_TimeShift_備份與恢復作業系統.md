# 使用 TimeShift 備份與恢復作業系統



https://blog.csdn.net/wf19930209/article/details/104236358



# **Timeshift系统备份与还原**
## **系统备份**

一般Linux系统是比较稳定的，但是一旦崩溃就很难恢复，这里介绍 **Timeshift**系统备份工具。

1. 安装Timeshift
    - ubuntu 和 linux mint
    sudo apt-add-repository -y ppa:teejee2008/ppa
    sudo apt-get update
    sudo apt-get install timeshif
                - 1
                - 2
                - 3
    - deepin
    - deepin 安装相对比较复杂，但是在国外有一个 **DEEPINES** 补充库，主要针对deepin不支持的软件移植。
    - 下载仓库安装包，访问此[网站下载](https://xn--deepinenespaol-1nb.org/en/repository/)，或者百度网盘`链接: https://pan.baidu.com/s/1sK0FiVaF_W_8YM94kpA8Uw 提取码: 98uk`。
    - 安装扩展库包：
    sudo dpkg -i deepines-repository_3.1_amd64.deb
                - 1
    sudo apt-get update
    sudo apt-get install timeshift
                - 1
                - 2
2. 打开timeshift软件，设置备份与还原类型：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155523306.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)

3. 此处选择【RSYNC】
4. 在【位置】选项内选择快照存储的位置：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155604585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)

    > 每台设备安装分区不一样，大家安装实际情况选择，一般选择比较大的空间存储，并且最好是机械，这样不容易损坏。
5. 在【计划】选项内不定期做备份
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155630669.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)

6. 不选择周期备份的原因是因为磁盘占用空间会不断增长，需要定期清理。
7. 在【用户】选项内设置需要备份的分区，**root**默认就是全备份的，经测试更改也是无效的，也就是**root**必须备份。
![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ub3RlLnlvdWRhby5jb20veXdzL3B1YmxpYy9yZXNvdXJjZS8zNzQ0ZjRjZDk2Yjk3MjBkNzcyYWY3OGNkY2I1NTljNC94bWxub3RlL1dFQlJFU09VUkNFZTQyOWM2ZTU3ZjM1Mjc5NWViYjI0YTU1YTk5OWM1OTgvNjU0NzI?x-oss-process=image/format,png)

8. 建议这样配置：
    - root选择【包含一切】或者【排除一切】
    - home选择【排除一切】
9. 在【筛选】选项内可以自定义备份文件或文件夹
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155658744.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)

10. 例如上图中就是`/home/vincent`目录下除了`.config`、`.cinnamon`、`.local`文件夹外都不备份。
11. 建议这样配置：
    - 先将home整个目录排除，添加`/home/vincent/**`
    - home目录下比较重要的如：`.local`、`.config`等，需要加入，切记要加上`***`三个星
12. 创建快照
13. 此时timeshift会根据时间生成一个带有时间戳的快照，此过程需要等待一段时间，并且期间不要对电脑执行任何操作。
## **还原主要针对三种情况**

**如果能够进入系统**

1. 如果此时还能够进入系统，直接打开 **Timeshift**软件进行还原：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155735896.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)

2. 在弹出的窗口内点击下一步开始进行还原到选中的节点：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155746216.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)


还原完成后重启电脑即可。
**如果只能进入登录界面**
一般系统崩溃后不能进入桌面，但是能够进入登录界面，现象就是在登录界面输入密码后不会进入桌面，那么就要通过命令行的方式进行还原。

1. 通过`Ctrl+Alt+F1`（一般是F1-F6都可）进入tty终端：
2. 输入用户和密码登录
3. 执行下面命令获取系统当前可以还原的节点：
    sudo timeshift --list
            - 1
4. 输出内容：
    Device : /dev/sdb4
    UUID   : 197c4161-abc6-4069-8544-d86594211f04
    Path   : /home
    Mode   : RSYNC
    Device is OK
    12 snapshots, 92.5 GB free
    
    Num     Name                 Tags  Description  
    ------------------------------------------------------------------------------
    0    >  2018-08-08_11-49-26  O D                
    1    >  2018-08-13_23-02-06  O                  
    2    >  2018-08-15_22-53-24  O                  
    3    >  2018-08-21_09-37-29  O                  
    4    >  2018-11-19_17-43-59  O                  
    5    >  2019-01-20_19-36-34  O                  
    6    >  2019-03-01_11-18-09  O                  
    7    >  2019-03-01_14-54-37  O                  
    8    >  2019-03-04_14-48-57  O                  
    9    >  2019-03-10_20-50-00  O                  
    10   >  2019-03-14_11-51-54  O                  
    11   >  2019-07-16_16-35-42  O
            - 1
            - 2
            - 3
            - 4
            - 5
            - 6
            - 7
            - 8
            - 9
            - 10
            - 11
            - 12
            - 13
            - 14
            - 15
            - 16
            - 17
            - 18
            - 19
            - 20
            - 21
5. 选择一个节点进行还原
    sudo timeshift --restore --snapshot '2019-07-16_16-35-42' --skip-grub
            - 1
    > –skip-grub 选项为跳过grub安装，一般来说grub不需要重新安装，除非bios启动无法找到正确的grub启动项，才需要安装。
6. 在输出的内容中依次输入【Enter】键和【y】键。
7. 当然也可以直接输入下面的命令，忽略交互式的安装界面：
    sudo timeshift --restore --snapshot '2019-07-16_16-35-42' --skip-grub --scripted
            - 1

**无法进入系统，通过U盘启动系统**
当登录界面和桌面环境都无法进入时，一般系统已经彻底崩溃，此时只能通过Linux live CD进行还原。

1. 制作Linux Mint 启动盘，制作过程略。
2. 进入Live系统后打开 **Timeshift** 软件，点击设置按钮，设置快照的存储位置：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200209155604585.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dmMTk5MzAyMDk=,size_16,color_FFFFFF,t_70)

    > 快照的存储位置是**Timeshift**在做备份的时候就已经设置好的。
3. 后续步骤和【[如果能够进入系统](https://blog.csdn.net/wf19930209/article/details/104236358#jump)】内的还原方式一样。

其实此时还可以通过命令行的方式进行还原，但是首先需要设置快照存储的位置：

    sudo timeshift --snapshot-device /dev/sdb4
        - 1

后续步骤和【[如果只能进入登录界面](https://blog.csdn.net/wf19930209/article/details/104236358#jump2)】内的还原方式一样。

