function LPiece() {
    this.states = [
        [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
        [
            [0, 0, 1],
            [1, 1, 1]
        ],
        [
            [1, 1],
            [0, 1],
            [0, 1]
        ],
        [
            [1, 1, 1],
            [1, 0, 0]
        ]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 4;
    this.gridY = -3;
}

function ReverseLPiece() {
    this.states = [
        [
            [0, 1],
            [0, 1],
            [1, 1]
        ],
        [
            [1, 1, 1],
            [0, 0, 1]
        ],
        [
            [1, 1],
            [1, 0],
            [1, 0]
        ],
        [
            [1, 0, 0],
            [1, 1, 1]
        ]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 4;
    this.gridY = -3;
}

function BlockPiece() {
    this.states = [
        [1, 1],
        [1, 1]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 4;
    this.gridY = -2;
}

function LinePiece() {
    this.states = [
        [
            [1],
            [1],
            [1],
            [1]
        ],
        [
            [1, 1, 1, 1]
        ]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 5;
    this.gridY = -4;
}

function TPiece() {
    this.states = [
        [
            [1, 1, 1],
            [0, 1, 0]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 0]
        ],
        [
            [0, 1, 0],
            [1, 1, 1]
        ],
        [
            [0, 1],
            [1, 1],
            [0, 1]
        ]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 4;
    this.gridY = -2;
}

function ZPiece() {
    this.states = [
        [
            [1, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 1],
            [1, 1],
            [1, 0]
        ]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 4;
    this.gridY = -2;
}

function ReverseZPiece() {
    this.states = [
        [
            [0, 1, 1],
            [1, 1, 0]
        ],
        [
            [1, 0],
            [1, 1],
            [0, 1]
        ]
    ];
    
    this.curState = 0;
    this.color = 0;
    this.gridX = 4;
    this.gridY = -2;
}

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