# Automatic-Marble-processor
A Wechat mini program for processing marbles using Javascript and Wechat Cloud base development

## Prerequisite
Developers who want to use it have to download Wechat DevTools.<br/>
Here is a link to it [Download Wechat DevTools](https://developers.weixin.qq.com/miniprogram/en/dev/devtools/download.html).<br/>

### Step 1
Developers must choose **"Mini Program Cloud Base"** when importing Project <br/>
![2021-03-31 14_55_37-微信开发者工具 Stable v1 03 2101150](https://user-images.githubusercontent.com/65717589/113196186-337fd300-9231-11eb-9b39-d28be8aa1739.png)

### Step 2
Open **"Cloud Base Console"** and create a new collection named "**prodcut**"<br/>
![data](https://user-images.githubusercontent.com/65717589/113196724-d0db0700-9231-11eb-8f86-c34835d34a7d.png)

Also create a new colleection named"manager" and insert 4 records storing the open_id of managers.

### Step 3
Go to **"cloudfunctions"** folder and deploy all cloud functions. <br/>
![func](https://user-images.githubusercontent.com/65717589/113197140-4f37a900-9232-11eb-866c-61b8b1e56ce4.png)

## Examples
### Product Detail
![2021-03-31 15_17_52-stone - Weixin Devtools Stable 1 03 2101150](https://user-images.githubusercontent.com/65717589/113198879-71322b00-9234-11eb-9933-7dfda45f4818.png)

### Edit Product
![2021-03-31 15_18_13-stone - Weixin Devtools Stable 1 03 2101150](https://user-images.githubusercontent.com/65717589/113198885-73948500-9234-11eb-8bc7-6687a1fbb419.png)

### Export Excel
![2021-03-31 15_18_24-stone - Weixin Devtools Stable 1 03 2101150](https://user-images.githubusercontent.com/65717589/113198890-74c5b200-9234-11eb-91cb-9d37220a0d2a.png)

**Tip: After clicking the button, the download link would be copied. Just paste it in browser, it will download automatically.**

### Levels of access permissions and data synchronization.
![2021-03-31 15_23_14-stone - Weixin Devtools Stable 1 03 2101150](https://user-images.githubusercontent.com/65717589/113199375-0cc39b80-9235-11eb-9dff-685d38217718.png)

**Those Open_id that we entered in the manager collection will lead to different pages when different users open the mini program.**
