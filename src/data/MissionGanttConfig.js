export const ganttConfig =  {
    tooltip : "My cool Bryntum Gantt component",
    viewPreset   : 'year',
    columns: [
        {type: "wbs"},
        {type: "name"},
        {type: "startdate"},
        {duration: "duration"}
    ],
    tasks: [{
        id        : 1,
        name      : 'Go to Mars',
        iconCls   : 'b-fa b-fa-space-shuttle',
        expanded  : true,
        startDate : '2030-01-01',
        children  : [
            { id : 2, name : 'Astronaut academy', percentDone : 85, duration : 30, iconCls : 'b-fa b-fa-user-graduate' },
            { id : 3, name : 'Buy space suit', percentDone : 50, duration : 5, iconCls : 'b-fa b-fa-user-astronaut' },
            { id : 4, name : 'Wait for Elon´s call', duration : 7, iconCls : 'b-fa b-fa-phone' }
        ]
    }],
    dependencies : [
        { from : 2, to : 3 },
        { from : 3, to : 4 }
    ]
};