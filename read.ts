const file = await Deno.open('data.json')
await Deno.copy(file, Deno.stdout)
file.close()