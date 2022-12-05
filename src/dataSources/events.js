import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Events extends MongoDataSource {
  async getEvents() {
    return await this.model.find();
  }

  async getEvent(id) {
    return await this.findOneById(id);
  }

  async createEvent({ subject, event, date, eventdate }) {
    return await this.model.create({ subject, event, date, eventdate });
  }

  async deleteEvent(id) {
    return await this.model.findByIdAndDelete(id);
  }
}