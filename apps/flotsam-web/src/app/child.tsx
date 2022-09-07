export type childInput = {
  name: string;
}

type friendType = 'best' | 'good' | undefined;

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

// export async function Calculator (input: childInput | extendedChildInput) : Promise<number> {
//   return (
//    a + b
//   );
// }
