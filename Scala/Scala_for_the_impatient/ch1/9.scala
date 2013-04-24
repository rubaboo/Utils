object Nine {
	def main(args: Array[String]) {
		val s = "Hello World, Scala."
		println(s.charAt(2))
		println( (for(c <- s) yield(c)) tail )
	}
}