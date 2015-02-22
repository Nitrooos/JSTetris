function Piece() {
    this.curState = 0;
    this.color = 0;
}

function LPiece() {
    this.gridX = 4;
    this.gridY = -3;
}

LPiece.prototype = new Piece();
LPiece.prototype.constructor = LPiece;
LPiece.prototype.states = [ [ [1, 0],
                              [1, 0],
                              [1, 1]
                            ],
                            [ [0, 0, 1],
                              [1, 1, 1]
                            ],
                            [ [1, 1],
                              [0, 1],
                              [0, 1]
                            ],
                            [ [1, 1, 1],
                              [1, 0, 0]
                            ]
];

function ReverseLPiece() {
    this.gridX = 4;
    this.gridY = -3;
}

ReverseLPiece.prototype = new Piece();
ReverseLPiece.prototype.constructor = ReverseLPiece;
ReverseLPiece.prototype.states = [ [ [0, 1],
                                     [0, 1],
                                     [1, 1]
                                   ],
                                   [ [1, 1, 1],
                                     [0, 0, 1]
                                   ],
                                   [ [1, 1],
                                     [1, 0],
                                     [1, 0]
                                   ],
                                   [ [1, 0, 0],
                                     [1, 1, 1]
                                   ]
];

function BlockPiece() {
    this.gridX = 4;
    this.gridY = -2;
}

BlockPiece.prototype = new Piece();
BlockPiece.prototype.constructor = BlockPiece;
BlockPiece.prototype.states = [ [1, 1],
                                [1, 1]
];

function LinePiece() {
    this.gridX = 5;
    this.gridY = -4;
}

LinePiece.prototype = new Piece();
LinePiece.prototype.constructor = LinePiece;
LinePiece.prototype.states = [ [ [1],
                                 [1],
                                 [1],
                                 [1]
                               ],
                               [ [1, 1, 1, 1]
                               ]
];

function TPiece() {    
    this.gridX = 4;
    this.gridY = -2;
}

TPiece.prototype = new Piece();
TPiece.prototype.constructor = TPiece;
TPiece.prototype.states = [ [ [1, 1, 1],
                              [0, 1, 0]
                            ],
                            [ [1, 0],
                              [1, 1],
                              [1, 0]
                            ],
                            [ [0, 1, 0],
                              [1, 1, 1]
                            ],
                            [ [0, 1],
                              [1, 1],
                              [0, 1]
                            ]
];

function ZPiece() {
    this.gridX = 4;
    this.gridY = -2;
}

ZPiece.prototype = new Piece();
ZPiece.prototype.constructor = ZPiece;
ZPiece.prototype.states = [ [ [1, 1, 0],
                              [0, 1, 1]
                            ],
                            [ [0, 1],
                              [1, 1],
                              [1, 0]
                            ]
];

function ReverseZPiece() {
    this.gridX = 4;
    this.gridY = -2;
}

ReverseZPiece.prototype = new Piece();
ReverseZPiece.prototype.constructor = ReverseZPiece;
ReverseZPiece.prototype.states = [ [ [0, 1, 1],
                                     [1, 1, 0]
                                   ],
                                   [ [1, 0],
                                     [1, 1],
                                     [0, 1]
                                   ]
];

function getRandomPiece() {
    var result = Math.floor(Math.random() * 7),
        piece;

    switch (result) {
        case 0: piece = new LPiece();           break;
        case 1: piece = new ReverseLPiece();    break;
        case 2: piece = new BlockPiece();       break;
        case 3: piece = new LinePiece();        break;
        case 4: piece = new TPiece();           break;
        case 5: piece = new ZPiece();           break;
        case 6: piece = new ReverseZPiece();    break;
    }
    
    piece.color = Math.floor(Math.random() * 8);
    return piece;
}