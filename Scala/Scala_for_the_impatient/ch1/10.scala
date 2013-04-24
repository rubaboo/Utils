object Ten {
	def main(args: Array[String]) {
		val a = "Hello world, Scala"
		println(a.take(10))
		println(a.drop(10))
		println(a.takeRight(10))
		println(a.dropRight(10))
	}
}