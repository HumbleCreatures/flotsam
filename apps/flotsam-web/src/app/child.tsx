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
  return (
    <div>
      <h1>Child { name }</h1>
    </div>
  );
}
