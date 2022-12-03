import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Feedbacks extends MongoDataSource {
  async getFeedbacks() {
    return await this.model.find();
  }

  async getFeedback(id) {
    return await this.findOneById(id);
  }

  async createFeedback({ subject, feedback, email, date }) {
    return await this.model.create({ subject, feedback, email, date });
  }

  async deleteFeedback(id) {
    return await this.model.findByIdAndDelete(id);
  }
}