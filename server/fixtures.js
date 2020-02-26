loadRolesFixtures = () => {
  const roles = ['admin', 'editor', 'default'];
  roles.forEach(
    role => {
      Roles.createRole(role);
    }
  )
}

loadFixtures = () => {
  if (Meteor.roles.find({}).count() == 0) {
    console.log("Import roles");
    loadRolesFixtures();
  } else {
    console.log("Roles already exist");
  }
}

export { loadFixtures }