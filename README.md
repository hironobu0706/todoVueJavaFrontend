>このリポジトリは申し込みシステム（ポートフォリオ）のフロントサイドです。  
>環境構築（起動するにはこれが必要）：https://github.com/hironobu0706/todoVueJavaInfra  
>バックエンドソース：https://github.com/hironobu0706/todoVueJavaBackend  
>
> + 使用言語等
> +    "axios": "^1.13.6",
> +    "pinia": "^3.0.4",
> +    "vue": "^3.5.30",
> +    "vue-router": "^5.0.4"

<h2>以下、起動方法及び画面説明</h2>

1.docker-composeで環境を作成し、コンテナ起動後に[http://localhost:5173/init](http://localhost:5173/init) にアクセス

2.トップページ画面。特に機能等はなし
<img width="1215" height="658" alt="image" src="https://github.com/user-attachments/assets/4e2b9b65-9255-46e7-81c7-4286fa8eb5dd" />

3.顧客情報入力画面。初期表示時は入力項目はすべて空欄、入力した内容がpiniaのstoreに保存される
<img width="1229" height="600" alt="image" src="https://github.com/user-attachments/assets/0e7b276c-a437-4e94-abba-50e809fd0333" />
<img width="1229" height="345" alt="image" src="https://github.com/user-attachments/assets/d968f265-832c-44c4-81a3-37b65a06197b" />

4.顧客情報確認画面。初期表示時にpiniaのstoreに入っているデータを表示する。
<img width="1229" height="680" alt="image" src="https://github.com/user-attachments/assets/05abbbf3-a0f9-4c9a-a8c0-575468f4bbaa" />

5.顧客情報登録完了画面。正常にDB登録できたことを伝える画面。ログイン画面に遷移する予定（※未実装）
<img width="1232" height="678" alt="image" src="https://github.com/user-attachments/assets/7a73544c-efd0-4c98-b8ec-b4d9e31bd42a" />

6.DB更新されていることを確認。上：登録前　下：登録後
<img width="1019" height="632" alt="image" src="https://github.com/user-attachments/assets/14aac20c-609b-4f9f-9cec-207b0cc4ec6e" />
<img width="1017" height="626" alt="image" src="https://github.com/user-attachments/assets/2980be1d-68b4-4b26-80a1-494ad83d2cdb" />

