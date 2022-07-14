export const ganttConfig = {
  // Toolbar (tbar) config
  tbar: {
    items: [
      {
        type: "button",
        text: "My button",
      },
      {
        type: "button",
        text: "My other button",
      },
    ],
  },
  tooltip: "My cool Bryntum Gantt component",
  viewPreset: "year",
  columns: [
    { type: "wbs" },
    { type: "name" },
    { type: "startdate" },
    { duration: "duration" },
  ],
  tasks: [
    {
      id: 1,
      name: "Go to Mars",
      iconCls: "b-fa b-fa-space-shuttle",
      expanded: true,
      startDate: "2030-01-01",
      children: [
        {
          id: 2,
          name: "Astronaut academy",
          percentDone: 85,
          duration: 10,
          iconCls: "b-fa b-fa-user-graduate",
        },
        {
          id: 3,
          name: "Buy space suit",
          percentDone: 50,
          duration: 2,
          iconCls: "b-fa b-fa-user-astronaut",
        },
        {
          id: 4,
          name: "Wait for Elon´s call",
          duration: 1,
          iconCls: "b-fa b-fa-phone",
        },
      ],
    },
  ],
  dependencies: [
    { from: 2, to: 3 },
    { from: 3, to: 4 },
  ],
  listeners: {
    /*         catchAll:function(e) {
            console.log('from listeners', e, e.type);
        } */
    afterEventSave: (source) => {
      // TODO now we dispatch action to save event data
      console.log("listeners | afterEventSave", source);
    },
    dataChange: (data) => {
      console.log("listeners | dataChange", data);
    },
  },
  onDataChange(e) {
    console.log("change!", e);
  },
};
