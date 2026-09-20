const folders = {
  name: "Project",
  children: [
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [
            {
              name: "user",
              children: [
                {
                  name: "login",
                  children: []
                }
              ]
            }
          ]
        },
        {
          name: "services",
          children: []
        }
      ]
    },
    {
      name: "assets",
      children: [
        {
          name: "images",
          children: []
        },
        {
          name:"icons",
          children:[]
        }
      ]
    }
  ]
};


function printFolders(folder) {
  console.log(folder.name);

  for (const child of folder.children) {
    printFolders(child);
  }
}

printFolders(folders);

