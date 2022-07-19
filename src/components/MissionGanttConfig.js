const ganttConfig = {
  columns : [
    { type : 'wbs' },
    { type : 'name', width : 250 },
    { type : 'startdate' },
    { type : 'duration' },
  ],
  listeners: {
    // catchAll: function (e) {
    //   console.log("listeners | catchAll", e.type, e);
    // },
    beforeLoadApply({ response }) {
      console.log("listeners | beforeLoadApply", response);
    },
    afterEventSave: (source) => {
      // TODO now we dispatch action to save event data
      console.log("listeners | afterEventSave", source);
    },
    // dataChange: (data) => {
    //   console.log("listeners | dataChange", data);
    // },
  },
};

export default ganttConfig;
