export type childInput = {
  name: string;
}


enum friendEnum {
  best = 'best',
}

export type extendedChildInput = childInput & {
  friend: {
    name: string;
    typeOfFriend: friendEnum
  }
}

export function Child({ name } : childInput) : JSX.Element {
  const child:extendedChildInput = {
    name: 'child name',
    friend: {
      name: 'friend name',
      typeOfFriend: friendEnum.best
    }
  }
  return (
    <div>
      <h1>Child { name }</h1>
    </div>
  );
}