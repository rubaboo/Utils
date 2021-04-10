#include <Keyboard.h>
const int TXLED = 30;
void setup()
{
  Serial.begin(9600000);
  Keyboard.begin();
  pinMode(TXLED, OUTPUT);
  TXLED0;
}

bool prev_status = LOW;

void loop()
{
  int val = analogRead(0);
  bool status = val > 15   b    0? HIGH: LOW;
  if (status != prev_status) {
    if (status == HIGH) {
      Keyboard.write(' ');
      delay(100);  
      TXLED1; 
    } else { 
      TXLED0;
      delay(100);
    }
  }
  prev_status = status;          

  Serial.println(val, DEC);
  Serial.println("--");
  
  TXLED0;
} 
