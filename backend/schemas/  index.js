const app = express()

// port define
const port = process.env.PORT || 3000

// database connection - mongodb
mongoose.connect(process.env.DB_URL).then(
	() => {
		console.log('DB connected!')
	},
	(err) => {
		console.log('Connection error', err)
	}
)

// setup the routes, cors for cross browser platform support
app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})