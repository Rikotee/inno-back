import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class News extends MongoDataSource {
  async getNews() {
    return await this.model.find();
  }

  async getNew(id) {
    return await this.findOneById(id);
  }

  async createNew({ subject, news, date }) {
    return await this.model.create({ subject, news, date });
  }

  async deleteNews(id) {
    return await this.model.findByIdAndDelete(id);
  }
}