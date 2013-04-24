import scala.swing._
import scala.swing.event._
import scala.actors.Actor._
import scala.actors._
import javax.swing.{UIManager,JComponent}
import javax.swing.KeyStroke.getKeyStroke
import java.awt.{Graphics2D,Graphics,Color,Rectangle}

object ball extends SimpleSwingApplication
{
	def Width = 640
	def Height = 480

	override def main(args: Array[String]) = super.main(args)

	def top = new MainFrame {
		log.start()
		title = "Main Window"
		size = new Dimension(Width,Height)
		preferredSize = new Dimension(Width,Height)
		minimumSize = new Dimension(Width,Height)

		var active = true

		val button = new Button {
			text = "Start/Stop"
		}
		val jc = new Component{
			val c_size = 50
			var n_size = 0
			var (x, y) = (1, 1)
			var (mx, my) = (1, 1)
			override def paint(g:Graphics2D){
				import g._
				val width  = this.size.width
				val height = this.size.height
				g.setPaint(Color.red)
				n_size = (c_size*(1+int2float(y)/height)).toInt
				g.fillOval(x,y,n_size,n_size)
			}
			visible = true
			def move()
			{
				val r = n_size
				val width  = this.size.width
				val height = this.size.height

				if(x+r>width){mx = -1}
				else if(x<0) {mx = 1}

				if(y+r>height) {my = -1}
				else if(y<0) {my = 1}

				x+=mx
				y+=my
			}
		}

		listenTo(button)
		reactions += {
			case ButtonClicked(b) => {
				println("[UI on " + Thread.currentThread +"]")
				log ! "Button clicked!"
				active = !active
			}
		}

		contents = new BoxPanel(Orientation.Vertical) {
			contents += button
			contents += jc
		}
		log ! "UI started"

		val mActor = actor {
            while(true){
            	if(active) {
	            	jc.move
	            	jc.repaint
	            }
            	Thread.sleep(10)
            }
		}

	}
	val log = new Actor {
		def act = {
			loop {
				react {
					case (message: String) => {
						println("[log on " + Thread.currentThread + "] " + message)
					}
				}
			}
		}
	}
}