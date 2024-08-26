# **Chess version Game** for Hitwicket assignment
Download Instrictions:<br>
Clone the git using <br>
`git clone https://github.com/mahatalakshmi/mahataLakshmiUmmadi_21BAI1155.git`
1) Create a file with <br>
`mkdir realtime_chess`<br>
`cd realtime_chess`
2) Init the project<br>
   `npm init`
3) Install express<br>
   `npm install express — save`
4) Run the code<br>
   `node app.js`<BR>

---
**Evaluation Matrix**
1) Theproject must be separated with client and server where client is the client.js and server as app.js✅
   
2) Server-side Implementation:
 a) Implement the core game logic as described in the Game Rules section.(Done)✅<br>
 b) Setup a websocket server to handle client connections and game events.(Have used the websocket to mainatain the connection between server and client.)✅<br>
 c) Process move commands and update the game state accordingly.(Done diaplayes whish player ove it is right now)✅<br>
 d) Implement thorough server-side move validation.(Done if invalid the key wont move to that place)✅<br>
 
3) Client-side Implementation:<br>
 ○ Create a basic web interface that displays the 5x5 game board.(have done for 8X8)✅<br>
 ○ Implement websocket communication with the server.(Done using websocket.io)✅<br>
 ○ Implement client-side move validation (Done with the validation function).✅<br>
 ○ Display valid moves for the selected character.(the yellow color box appers when the player select the element)✅<br>
 ○ Send move commands to the server and handle responses.(when the player changes the position of the key the sever updates the key position)✅<br>
 
4) Websocket Communication:<br>
 ○ Implement event handling for game initialization, player moves, and game state updates.(DOne using the websock.io)✅<br>
 ○ Ensure real-time synchronization of game state between server and all connected clients.(Done)✅ <br>
 
 5) Move Validation (both client and server-side):<br>
 ○ Prevent selection or movement of opponent's pieces.(yes when an oponet tries to move too he can place his key) ✅<br>
 ○ Ensure moves are within the 5x5 grid boundaries.(Done with 8*8 matrix so ✅<br>
 ○ Validate moves according to each character type's movement rules.(Done with the login present✅)<br>
 ○ Prevent friendly fire (moving onto or through spaces occupied by friendly characters).(in case of ours we can kill according to the rules)<br>
 
6)  Edge Cases to Handle:<br>
 ○ Simultaneous move attempts by multiple clients.(yes I have written the logic for that ✅)<br>
 ○ Handling of game state when a player quits mid-game.(when quits it restarts ✅)<br>
 ○ Proper game termination when all opponent's pieces are eliminated.(yes it gives a notification that the player won and a button is displayed for the restart of the game✅)<br>
 
 7) GameFlow:<br>
 ○ Implement turn-based gameplay with clear indication of current player's turn.(Done ✅)<br>
 ○ Correct handling of piece elimination upon valid capture moves.(Done ✅) <br>
 ○ Proper game end detection and winner announcement.(Yes using alert notifications ✅) <br>
 
8) Code Quality:<br>
 ○ Write clean, well-commented code following best practices for chosen(have given the comments for the code ✅) technologies.<br>

---
## **5x5 Chess Game**
This variant is a small version of the rules that were given in the document The game includes:
- **Pieces**: King, Queen, and 2 Pawns per player.
-**To challenge my self i have done this using the 8X8 matrix**
---

## **8x8 Chess Game with Socket.IO**

Developed a chess geme using the rules given in the assignment.
### **Features:**

1. **Move Highlighting**
   - The game highlights the possible moves for the selected piece, making it easier to see valid moves.
   ![Move Highlighting](https://github.com/user-attachments/assets/6c3e4303-a566-4f78-a74e-f222b8a856a4)

2. **Player Turn Indication**
   - The interface clearly indicates which player's turn it is, ensuring smooth gameplay.
   ![Player Turn Indication](https://github.com/user-attachments/assets/ad70ac46-3f63-475c-8a23-11631f43505e)
   ![Player Turn Indication](https://github.com/user-attachments/assets/f3bcff5d-1f46-4ac0-8f5f-342025522218)

3. **Win Notification**
   - When a player wins, the game displays a clear notification showing the winner.
   ![Win Notification](https://github.com/user-attachments/assets/d7fc70ec-25ae-4337-8e32-13b1d6f1a471)

4. **Game Restart Option**
   - After a match, you can easily restart the game for a new challenge(only shows after a player wins the gaem.
   ![Game Restart](https://github.com/user-attachments/assets/96add1ef-86f1-482e-a8a0-b4b375a8fc07)

5. **Multiplayer Functionality**
   - Play against friends in a real-time multiplayer mode, powered by Socket.IO in JavaScript.
   ![Multiplayer Game](https://github.com/user-attachments/assets/5ba2b1d9-fb31-4ab0-a1a1-8d8478c6aafb)
Multiplayer funcnality is added using the client server architecture and socket.io

---

