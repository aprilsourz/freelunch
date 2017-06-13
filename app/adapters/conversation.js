import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');
    // serialize jQuery take an our data object(pojo) and format
    // it into the way the api wants it.
    let url = `${api}/conversations`;
    let serialized = this.serialize(record);
    let data = { conversation: serialized};
    return this.ajax(url, 'POST', {data});
  }
});
