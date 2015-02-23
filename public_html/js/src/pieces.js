function Piece() {
    this.curState = 0;
    this.color = 0;
}

Piece.prototype = {
    width: 32,
    height: 32
};

function LPiece() {
    this.gridX = 4;
    this.gridY = -2;
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
    this.gridY = -2;
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
    this.gridY = -1;
}

BlockPiece.prototype = new Piece();
BlockPiece.prototype.constructor = BlockPiece;
BlockPiece.prototype.states = [ [ [1, 1],
                                  [1, 1]
                                ]
];

function LinePiece() {
    this.gridX = 5;
    this.gridY = -3;
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
    this.gridY = -1;
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
    this.gridY = -1;
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
    this.gridY = -1;
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
