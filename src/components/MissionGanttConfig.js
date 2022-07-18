const ganttConfig = {
  project: {
    transport: {
      load: {
        url: "data/mission.json",
      },
    },
    autoLoad: true,
  },
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
  columns : [
    { type : 'wbs' },
    { type : 'name', width : 250 },
    { type : 'startdate' },
    { type : 'duration' },
  ]
};

export default ganttConfig;
