import axios from "axios";
const env = "https://morino.party/wp-json";

export class WpApi {
  constructor() {
    this.resetApiUrl = env;
  }
  // 最新記事取得
  latest() {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/posts`, {
        params: {
          per_page: 99,
          fields: "id,slug,title,featured_image,tags,categories,date"
        }
      })
      .then(json => {
        return json.data;
      })
      .catch(e => {
        return { error: e };
      });
  }
  //投稿記事取得
  getSingleInfo(slug) {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/pages`, {
        params: {
          slug: slug,
          fields:
            "id,slug,date,title,content.rendered,featured_image,category,tags,acf,excerpt.rendered,ritch_view"
        }
      })
      .then(json => {
        return json.data[0];
      })
      .catch(e => {
        return { error: e };
      });
  }
  // 固定ページ取得
  getPageInfo(slug) {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/pages?`, {
        params: {
          slug: slug
        }
      })
      .then(json => {
        return json.data[0];
      })
      .catch(e => {
        return { error: e };
      });
  }
  //カテゴリー記事取得
  getCategoryInfo(slug) {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/categories/?slug=${slug}`)
      .then(json => {
        return json.data[0];
      })
      .catch(e => {
        return { error: e };
      });
  }
  //設定取得
  getSetting() {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/pages?`, {
        params: {
          per_page: 99,
          fields: "slug"
        }
      })
      .then(json => {
        return json.data;
      })
      .catch(e => {
        return { error: e };
      });
  }
  //検索用
  getSearchInfo(keyword, category) {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/posts`, {
        params: {
          categories: category,
          search: keyword,
          fields: "slug,title,featured_image,tags,categories,date"
        }
      })
      .then(json => {
        return json.data;
      })
      .catch(e => {
        return { error: e };
      });
  }
  // geneate用関数
  generateArticles() {
    return axios
      .get(`${this.resetApiUrl}/wp/v2/posts`, {
        params: {
          per_page: 99,
          fields: "slug"
        }
      })
      .then(json => {
        return json.data;
      })
      .catch(e => {
        return { error: e };
      });
  }
}

const wp = new WpApi();
export default wp;
