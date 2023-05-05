console.log("这是我的app.js文件");

//初始化git  :  git init
//查看git文件状态： git status
//把文件从工作区提交到暂存区： git add 文件名 或者  git add .
//把文件从暂存区提交到git本地仓库: git commit -m '提交信息'
//查看提交记录：git log

//git的三个分区和三个状态
//分区：工作区、暂存区、本地git仓库
//状态：已提交（committed）、已修改(modified)、已缓存(staged)

//git恢复到指定版本
//git checkout 版本哈希值

//git branch 查看分支
// git branch 分支名称 创建分支
// git checkout 分支名称 切换分支
// git branch -d 分支名称 删除分支（分支被合并后才允许删除）（-D 强制删除）
// git merge 分支名称   合并分支

//暂时保持更改
// 存储临时分支改动：git stash
// 恢复改动：git stash pop

//git提交远程仓库
//创建远程仓库别名： git remote add 别名 远程git仓库地址
//提交：git push -u 别名 分支名


//使用SSH登录
//创建公告key： ssh-keygen



