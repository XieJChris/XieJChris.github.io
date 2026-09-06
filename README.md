# 个人学术网站（GitHub Pages 免费托管）

纯静态单页网站，无构建工具、无框架，直接改 HTML 即可维护。

## 文件结构

| 文件 | 作用 |
|---|---|
| `index.html` | 全部内容（顶部注释有完整的「替换清单 EDIT MAP」） |
| `styles.css` | 样式（配色、字体都在文件顶部的 `:root` 变量里） |
| `script.js` | 滚动显现动画、导航高亮、页脚日期 |
| `portrait.svg` | 头像占位图 → 换成你的照片 |
| `favicon.svg` | 浏览器标签页图标 |
| `.nojekyll` | 让 GitHub Pages 跳过 Jekyll 处理，原样托管静态文件 |

## 部署到 GitHub Pages（获得免费域名）

1. 注册 GitHub 账号，记下你的用户名（例如 `janechen`）。
2. 新建仓库，**仓库名必须完全是 `用户名.github.io`**（例如 `janechen.github.io`），保持 Public。
3. 上传文件，二选一：
   - **网页上传（最简单）**：仓库页面 → `Add file` → `Upload files` → 把本文件夹里的所有文件拖进去 → `Commit changes`。
   - **命令行**：
     ```bash
     cd ~/personal-website
     git init -b main
     git add .
     git commit -m "Personal website"
     git remote add origin git@github.com:用户名/用户名.github.io.git
     git push -u origin main
     ```
4. 等 1–2 分钟，访问 **https://用户名.github.io** ✅

以后更新内容：改文件 → `git add . && git commit -m "update" && git push`，约 1 分钟后线上生效。

## 需要替换的占位内容

打开 `index.html`，顶部的 **EDIT MAP** 注释列得很清楚。最小清单：

1. `Jane Chen` → 你的姓名（搜索替换即可）
2. `University of X` → 你的学校与院系
3. 邮箱、Google Scholar、ORCID、GitHub 四处链接（搜索 `EDIT`）
4. Research 的三个研究方向文字
5. Publications 列表（年份、标题、作者、期刊、DOI）
6. News 动态
7. **照片**：把一张 4:5 竖版照片命名为 `portrait.jpg` 放进本文件夹，然后把 `index.html` 里 `<img src="portrait.svg" …>` 改为 `<img src="portrait.jpg" …>`
8. **CV**：把 PDF 命名为 `cv.pdf` 放进本文件夹，页面里的两个 CV 链接即可用

## 本地预览

```bash
cd ~/personal-website && python3 -m http.server 8000
```

浏览器打开 <http://localhost:8000>。

## 中国大陆访问优化（可选）

Google Fonts 在大陆可能加载较慢。打开 `index.html`，把字体两处域名换成 Google 官方国内镜像即可（一行改动）：

- `fonts.googleapis.com` → `fonts.googleapis.cn`
- `fonts.gstatic.com` → `fonts.gstatic.cn`

不改也不影响阅读——会自动回退到系统衬线字体，版式依然成立。

## 可选进阶

- **自定义域名**（约 ¥70/年）：买一个域名后，仓库 `Settings` → `Pages` → `Custom domain`。
- **访客统计**：可加 Google Analytics 或「不蒜子」一行脚本。
- **以后想写博客**：单页可以直接加 `Writing` 章节；文章多了再考虑迁移到 Jekyll/Hugo。
