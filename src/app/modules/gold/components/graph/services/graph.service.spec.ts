import { TestBed } from "@angular/core/testing"
import { GraphService } from "./graph.service"

describe('GraphSevice', () => {
    let service: GraphService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(GraphService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})