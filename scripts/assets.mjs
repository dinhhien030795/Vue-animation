// 8x8 pixel maps. '.' = transparent. Edit these, then run `npm run build`.
export const PALETTE = {
  k: '#1a1a2e', w: '#ffffff', r: '#e63946', y: '#ffd166', o: '#f4845f',
  b: '#3a86ff', c: '#8ecae6', g: '#52b788', d: '#2d6a4f', p: '#9d4edd',
  n: '#8d5524', s: '#9aa0a6',
}

export const ASSETS = {
  sprites: {
    heart: ['.rr..rr.', 'rwrrrrrr', 'rrrrrrrr', 'rrrrrrrr', '.rrrrrr.', '..rrrr..', '...rr...', '........'],
    coin: ['..kkkk..', '.kyyyyk.', 'kyywyyok', 'kywyyyok', 'kyyyyyok', 'kyyyyook', '.kooook.', '..kkkk..'],
    gem: ['..kkkk..', '.kcwccbk', 'kcwcccbk', 'kccccbbk', '.kccbbk.', '..kcbk..', '...kk...', '........'],
    key: ['..kkk...', '.kyyyk..', '.ky.yk..', '.kyyyk..', '..kyk...', '..kyyk..', '..kyk...', '...kk...'],
    sword: ['.......w', '......ws', '.....ws.', 'w...ws..', 'sw.ws...', '.sws....', '..nk....', '.nk.k...'],
    potion: ['...kk...', '...ss...', '..kssk..', '.kppppk.', 'kppwpppk', 'kppppppk', '.kppppk.', '..kkkk..'],
    slime: ['........', '..kkkk..', '.kggggk.', 'kgkggkgk', 'kggggggk', 'kgddddgk', '.kkkkkk.', '........'],
    star: ['...yy...', '...yy...', 'yyyyyyyy', '.yyooyy.', '..yooy..', '.yyyyyy.', '.yy..yy.', 'yy....yy'],
  },
  tiles: {
    grass: ['dgdddgdd', 'ddgdddgd', 'gdddgddd', 'dddgdddg', 'dgdddgdd', 'ddgdddgd', 'gdddgddd', 'dddgdddg'],
    brick: ['kkkkkkkk', 'sssksssk', 'sssksssk', 'kkkkkkkk', 'ksssksss', 'ksssksss', 'kkkkkkkk', 'sssksssk'],
  },
}
