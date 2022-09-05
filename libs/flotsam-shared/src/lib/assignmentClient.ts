type Assignment = {
  id: string;
  title: string;
  userId: string;
}

export async function getAllAssignments() : Promise<Assignment[]> {
  return [
    { id: '10', title: 'Title A', userId: '1' },
    { id: '3', title: 'Title B', userId: '2' },
    { id: '17', title: 'Title C', userId: '3' },
    { id: '8', title: 'Title D', userId: '1' },
    { id: '2', title: 'Title E', userId: '2' },
    { id: '33', title: 'Title F', userId: '3' },
  ]
}

type User = {
  id: string;
  name: string;
}

const userDataBase:User[] = [
  { id: '1', name: 'User A' },
  { id: '2', name: 'User B' },
  { id: '3', name: 'User C' },
]

export async function getUserById(id: string) : Promise<User|undefined> {
  return new Promise(res => setTimeout(() => {
    const user = userDataBase.find(user => user.id === id);
    res(user);
  }, 10));
};
